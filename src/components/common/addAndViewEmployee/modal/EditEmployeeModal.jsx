import { useEffect, useState, useRef } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Edit, X } from "lucide-react";
import toast from "react-hot-toast";
import { useEditEmployeeMutation } from "../../../../redux/slices/employeeApiSlice";
import { useGetDepartmentsQuery } from "../../../../redux/slices/departmentApiSlice";
import { useGetRolesQuery } from "../../../../redux/slices/roleApiSlice";
import CustomDropdown from "../../custom/CustomDropDown";

export default function EditEmployeeModal({
  id,
  employeeName: initialEmployeeName,
  employeeEmail: initialEmployeeEmail,
  employeeMobileNumber: initialEmployeeMobileNumber,
  department: initialDepartment,
  role: initialRole,
  employeeSalary: initialEmployeeSalary,
  employeePhoto: initialEmployeePhoto,
  employeeAdharCard: initialEmployeeAdharCard,
  employeePanCard: initialEmployeePanCard,
  employeeAgreement: initialEmployeeAgreement,
  fatherOrHusbandName: initialFatherOrHusbandName,
  sex: initialSex,
  maritalStatus: initialMaritalStatus,
  bloodGroup: initialBloodGroup,
  presentAddress: initialPresentAddress,
  permanentAddress: initialPermanentAddress,
  dateOfBirth: initialDateOfBirth,
  dateOfJoining: initialDateOfJoining,
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeEmail: "",
    employeeMobileNumber: "",
    department: "",
    role: "",
    employeeSalary: "",
    employeeAdharCard: null,
    employeePanCard: null,
    employeeAgreement: null,
    employeePhoto: null,
    fatherOrHusbandName: "",
    sex: "",
    maritalStatus: "",
    bloodGroup: "",
    presentAddress: "",
    permanentAddress: "",
    dateOfBirth: "",
    dateOfJoining: "",
  });

  const [pdfPreviews, setPdfPreviews] = useState({
    employeeAdharCard: null,
    employeePanCard: null,
    employeeAgreement: null,
  });
  const [photoPreview, setPhotoPreview] = useState(null);
  const fileInputRef = useRef(null);

  const { data: departments } = useGetDepartmentsQuery();
  const { data: roles } = useGetRolesQuery();

  const [selectedDepartment, setSelectedDepartment] = useState({
    name: initialDepartment?.departmentName || "",
    id: initialDepartment?._id || "",
  });
  const [selectedRole, setSelectedRole] = useState({
    name: initialRole?.roleName || "",
    id: initialRole?._id || "",
  });

  const [editEmployee, { isLoading, isError, error, data, isSuccess }] =
    useEditEmployeeMutation();

  const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [isFormModified, setIsFormModified] = useState(false); // State to track form modifications

  const handleOpen = () => {
    setOpen(!open);
    if (!open) {
      setFormData({
        employeeName: initialEmployeeName || "",
        employeeEmail: initialEmployeeEmail || "",
        employeeMobileNumber: initialEmployeeMobileNumber || "",
        department: initialDepartment?._id || "",
        role: initialRole?._id || "",
        employeeSalary: initialEmployeeSalary || "",
        employeeAdharCard: null,
        employeePanCard: null,
        employeeAgreement: null,
        employeePhoto: null,
        fatherOrHusbandName: initialFatherOrHusbandName || "",
        sex: initialSex || "",
        maritalStatus: initialMaritalStatus || "",
        bloodGroup: initialBloodGroup || "",
        presentAddress: initialPresentAddress || "",
        permanentAddress: initialPermanentAddress || "",
        dateOfBirth: initialDateOfBirth || "",
        dateOfJoining: initialDateOfJoining || "",
      });

      setSelectedDepartment({
        name: initialDepartment?.departmentName || "",
        id: initialDepartment?._id || "",
      });

      setSelectedRole({
        name: initialRole?.roleName || "",
        id: initialRole?._id || "",
      });

      setPdfPreviews({
        employeeAdharCard: initialEmployeeAdharCard?.url || null,
        employeePanCard: initialEmployeePanCard?.url || null,
        employeeAgreement: initialEmployeeAgreement?.url || null,
      });

      setPhotoPreview(initialEmployeePhoto?.url || null);
      setIsFormModified(false); // Reset the modification state when dialog is opened
    }
  };

  const handleInputChange = (e) => {
    const updatedFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedFormData);
    checkFormModification(updatedFormData);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (file) {
      const updatedFormData = { ...formData, [name]: file };
      setFormData(updatedFormData);
      checkFormModification(updatedFormData);

      if (file.type === "application/pdf") {
        setPdfPreviews({ ...pdfPreviews, [name]: URL.createObjectURL(file) });
      } else if (file.type.startsWith("image/")) {
        setPhotoPreview(URL.createObjectURL(file));
      }
    }
  };

  // Function to check if the form has been modified
  const checkFormModification = (updatedFormData) => {
    const isModified =
      updatedFormData.employeeName !== initialEmployeeName ||
      updatedFormData.employeeEmail !== initialEmployeeEmail ||
      updatedFormData.employeeMobileNumber !== initialEmployeeMobileNumber ||
      updatedFormData.department !== (initialDepartment?._id || "") ||
      updatedFormData.role !== (initialRole?._id || "") ||
      updatedFormData.employeeSalary !== initialEmployeeSalary ||
      updatedFormData.employeePhoto !== null ||
      updatedFormData.employeeAdharCard !== null ||
      updatedFormData.employeePanCard !== null ||
      updatedFormData.employeeAgreement !== null ||
      updatedFormData.fatherOrHusbandName !== initialFatherOrHusbandName ||
      updatedFormData.sex !== initialSex ||
      updatedFormData.maritalStatus !== initialMaritalStatus ||
      updatedFormData.bloodGroup !== initialBloodGroup ||
      updatedFormData.presentAddress !== initialPresentAddress ||
      updatedFormData.permanentAddress !== initialPermanentAddress ||
      updatedFormData.dateOfBirth !== initialDateOfBirth ||
      updatedFormData.dateOfJoining !== initialDateOfJoining;

    setIsFormModified(isModified);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    for (let key in formData) {
      if (formData[key]) {
        formDataObj.append(key, formData[key]);
      }
    }

    try {
      await editEmployee({ id, employeeData: formDataObj }).unwrap();
    } catch (error) {
      toast.error(error?.data?.error || "Error updating employee");
    }
  };

  useEffect(() => {
    if (isError) {
      handleOpen();
      toast.error(error?.data?.error || "Failed to update employee");
    }

    if (isSuccess) {
      handleOpen();
      toast.success(data?.message)
    }
  }, [isError, error, isSuccess, data]);

  const filteredRoles = roles?.filter(
    (role) => role.departmentName?._id === selectedDepartment.id
  );


  const handleDropdownChange = (name) => (value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // You might want to check if form data has changed here as well
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
      >
        <Edit className="h-4 w-4" />
      </IconButton>

      <Dialog open={open} size="xxl" className="shadow-none hover:shadow-none rounded-none bg-green-50 overflow-scroll">

        {/* <pre>{JSON.stringify(selectedDepartment.name,null,2)}</pre> */}
        {/* <pre>{JSON.stringify(selectedRole?.name,null,2)}</pre> */}
        <div className="px-4 py-4">
          <h1 className="text-xl text-black font-bold">Edit Employee</h1>
          <div
            className="absolute top-0 right-0 py-1.5 px-1.5 bg-green-500 cursor-pointer "
            onClick={handleOpen}
          >
            <X size={20} className="text-green-100 hover:text-white" />
          </div>
        </div>

        <DialogBody>
          <form onSubmit={handleSubmit} className="space-y-4">


            <div className="flex justify-center mb-6">
              <label htmlFor="file-uploads" className="custom-file-upload cursor-pointer">
                {photoPreview ? (
                  <img
                    className="w-24 h-24 border-2 rounded-full object-cover border-green-600 shadow-md"
                    src={photoPreview}
                    alt="Profile"
                  />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1771/1771013.png"
                    className="h-24 w-24 border-2 rounded-full"
                    alt="Default Profile"
                  />
                )}
              </label>
              <input
                id="file-uploads"
                type="file"
                name="employeePhoto"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>



            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <Input
                  type="text"
                  name="employeeName"
                  value={formData.employeeName}
                  onChange={handleInputChange}
                  label="Employee Name"
                  size="lg"
                  color="green"
                  className=" app-font"
                />
              </div>

              <div className="w-full sm:w-1/2">
                <Input
                  type="email"
                  name="employeeEmail"
                  value={formData.employeeEmail}
                  onChange={handleInputChange}
                  label="Email"
                  size="lg"
                  color="green"
                  className=" app-font"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <Input
                  type="text"
                  name="employeeMobileNumber"
                  value={formData.employeeMobileNumber}
                  onChange={handleInputChange}
                  label="Mobile Number"
                  size="lg"
                  color="green"
                  className=" app-font"
                />
              </div>

              <div className="relative w-full sm:w-1/2">
                <div
                  onClick={() => setIsDepartmentDropdownOpen(!isDepartmentDropdownOpen)}
                  className="w-full px-3 py-2 border border-[#607d8b] capitalize rounded-lg cursor-pointer app-font"
                >
                  {selectedDepartment.name || "Select Department"}
                </div>
                {isDepartmentDropdownOpen && (
                  <ul className="absolute left-0 w-full mt-1 bg-white capitalize border border-gray-300 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                    {departments?.map((department) => (
                      <li
                        key={department._id}
                        className="px-4 py-2 hover:bg-green-100 cursor-pointer app-font"
                        onClick={() => {
                          setSelectedDepartment({ name: department.departmentName, id: department._id });
                          const updatedFormData = { ...formData, department: department._id };
                          setFormData(updatedFormData);
                          checkFormModification(updatedFormData);
                          setIsDepartmentDropdownOpen(false);
                        }}

                      >
                        {department.departmentName}
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </div>




            <div className="flex flex-col sm:flex-row gap-4">
              <div
                className={`relative w-full sm:w-1/2 ${!formData.department
                  ? "opacity-50 cursor-not-allowed"
                  : ""
                  }`}
              >
                <div
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  className={`w-full px-3 py-2 border capitalize border-[#607d8b] app-font rounded-lg cursor-pointer ${!selectedDepartment.id ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {selectedRole.name || "Select Role"}
                </div>
                {isRoleDropdownOpen && (
                  <ul className="absolute left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                    {filteredRoles?.map((role) => (
                      <li
                        key={role._id}
                        className="px-4 py-2 hover:bg-green-100 cursor-pointer app-font capitalize"
                        onClick={() => {
                          setSelectedRole({ name: role.roleName, id: role._id });
                          const updatedFormData = { ...formData, role: role._id };
                          setFormData(updatedFormData);
                          checkFormModification(updatedFormData);
                          setIsRoleDropdownOpen(false);
                        }}
                      >
                        {role.roleName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="w-full sm:w-1/2">
                <Input
                  type="text"
                  name="employeeSalary"
                  value={formData.employeeSalary}
                  onChange={handleInputChange}
                  label="Salary"
                  size="lg"
                  color="green"
                  className=" app-font"
                />
              </div>
            </div>


          <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <Input
                    type="text"
                    name="fatherOrHusbandName"
                    value={formData.fatherOrHusbandName}
                    onChange={handleInputChange}
                    label="Father or Husband Name"
                    size="lg"
                    color="green"
                  />
                </div>

                <div className="w-full sm:w-1/2">
                  <CustomDropdown
                    label="Select Sex"
                    options={["male", "female", "other"]}
                    selectedValue={formData.sex}
                    onChange={handleDropdownChange("sex")}
                  />
                </div>
              </div>



              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <CustomDropdown
                    label="Select Marital Status"
                    options={["single", "married", "divorced", "widowed"]}
                    selectedValue={formData.maritalStatus}
                    onChange={handleDropdownChange("maritalStatus")}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <Input
                    type="text"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleInputChange}
                    label="Blood Group"
                    size="lg"
                    color="green"
                  />
                </div>
              </div>
            {/* Address Info */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <Input
                  type="text"
                  name="presentAddress"
                  value={formData.presentAddress}
                  onChange={handleInputChange}
                  label="Present Address"
                  size="lg"
                  color="green"
                  className="app-font"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <Input
                  type="text"
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleInputChange}
                  label="Permanent Address"
                  size="lg"
                  color="green"
                  className="app-font"
                />
              </div>
            </div>

            {/* Date Info */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  label="Date of Birth"
                  size="lg"
                  color="green"
                  className="app-font"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <Input
                  type="date"
                  name="dateOfJoining"
                  value={formData.dateOfJoining}
                  onChange={handleInputChange}
                  label="Date of Joining"
                  size="lg"
                  color="green"
                  className="app-font"
                />
              </div>
            </div>


            {/* <pre>{JSON.stringify(pdfPreviews, null, 2)}</pre> */}

            {/* File Upload for Aadhar, Pan, Agreement */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/3 border border-green-300 rounded-lg   ">
                <div className=" bg-green-100 px-4 py-2 rounded-t-lg border-b border-green-300">
                  <label className=" app-font text-green-800">Aadhar Card:</label>
                  <input
                    type="file"
                    name="employeeAdharCard"
                    onChange={handleFileChange}
                    accept="application/pdf"
                    ref={fileInputRef}
                    className="mx-2 text-sm text-green-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-200 file:text-green-700 hover:file:bg-green-300 cursor-pointer"
                  />
                </div>
                {pdfPreviews.employeeAdharCard && (
                  <div className="p-2">
                    <iframe
                      src={pdfPreviews.employeeAdharCard}
                      type="application/pdf"
                      className="w-full h-80 "
                      title="Employee Adhar Card"
                    />
                  </div>

                )}
              </div>

              <div className="w-full sm:w-1/3 border border-green-300 rounded-lg ">
                <div className=" bg-green-100 px-4 py-2 rounded-t-lg border-b border-green-300">
                  <label className=" app-font text-green-800">Pan Card:</label>
                  <input
                    type="file"
                    name="employeePanCard"
                    onChange={handleFileChange}
                    accept="application/pdf"
                    className="mx-2 text-sm text-green-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-200 file:text-green-700 hover:file:bg-green-300 cursor-pointer"
                    ref={fileInputRef}
                  />

                </div>
                {pdfPreviews.employeePanCard && (
                  <iframe
                    src={pdfPreviews.employeePanCard}
                    type="application/pdf"
                    className="w-full h-80 mt-2"
                    title="Employee Adhar Card"
                  />

                )}
              </div>

              <div className="w-full sm:w-1/3 border border-green-300 rounded-lg ">
                <div className=" bg-green-100 px-4 py-2 rounded-t-lg border-b border-green-300">
                  <label className=" app-font text-green-800">Agreement:</label>
                  <input
                    type="file"
                    name="employeeAgreement"
                    onChange={handleFileChange}
                    accept="application/pdf"
                    className="mx-2 text-sm text-green-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-200 file:text-green-700 hover:file:bg-green-300 cursor-pointer"
                    ref={fileInputRef}
                  />
                </div>

                {pdfPreviews.employeeAgreement && (
                  <iframe
                    src={pdfPreviews.employeeAgreement}
                    type="application/pdf"
                    className="w-full h-80 mt-2"
                    title="Employee Adhar Card"
                  />

                )}
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <Button variant="" className=" w-full hover:shadow-none shadow-none" type="submit" color="green" disabled={!isFormModified || isLoading}>
                {isLoading ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
