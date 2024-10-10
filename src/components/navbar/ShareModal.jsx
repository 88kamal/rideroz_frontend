import { Fragment, useState } from "react";
import {
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { AiOutlineShareAlt } from 'react-icons/ai';
import { ShareSocial } from 'react-share-social'

export default function ShareModal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <Fragment>
            <div className="ml-auto hidden lg:block sm:block md:block cursor-pointer">
                <AiOutlineShareAlt onClick={handleOpen}
                    size={25}
                />
            </div>
            <Dialog className=" relative right-[1em] w-[25em]  md:right-0 md:w-0 lg:right-0 lg:w-0" open={open} handler={handleOpen}>
                <DialogBody >
                    <ShareSocial
                    title={"Rideroz"}
                        url="https://rideroz.com"
                        socialTypes={['facebook', 'twitter', 'whatsapp', 'linkedin']}
                    />
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}