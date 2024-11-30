import { Button } from '@material-tailwind/react';
import { Eye, ThumbsUp } from 'lucide-react';
import { useNavigate } from 'react-router';

function BlogPostCard() {
    const navigate = useNavigate();

    // Dummy data for testing
    const getAllBlog = [
        {
            id: 1,
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/blog-fea71.appspot.com/o/blogimage%2FReact%20Introduction.png?alt=media&token=1ba7496b-2cbc-450c-ab1a-57e19882dc76', // Replace with your thumbnail URL
            date: '2024-11-29',
            blogs: {
                title: 'Understanding React Lifecycle',
                view: "1k"
            },
        },
        {
            id: 2,
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/blog-fea71.appspot.com/o/blogimage%2FReact%20Introduction.png?alt=media&token=1ba7496b-2cbc-450c-ab1a-57e19882dc76',
            date: '2024-11-28',
            blogs: {
                title: 'Introduction to Tailwind CSS',
                view: "2k"
            },
        },
        {
            id: 3,
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/blog-fea71.appspot.com/o/blogimage%2FReact%20Introduction.png?alt=media&token=1ba7496b-2cbc-450c-ab1a-57e19882dc76',
            date: '2024-11-27',
            blogs: {
                title: 'JavaScript ES6 Features',
                view: "7k"
            },
        },
    ];

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto max-w-8xl">
                    {/* Main Content */}
                    <div className="flex flex-wrap justify-center -m-4 mb-5">
                        {/* Card 1 */}
                        {getAllBlog.length > 0 ? (
                            <>
                                {getAllBlog.map((item, index) => {
                                    const { thumbnail, date, id } = item;
                                    return (
                                        <div key={index} className="p-4 md:w-1/3">
                                            <div
                                                className={`h-full bg-white drop-shadow rounded-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400`}
                                            >
                                                {/* Blog Thumbnail */}
                                                <img
                                                    onClick={() => navigate(`/bloginfo/${id}`)}
                                                    className="w-full rounded-t-lg"
                                                    src={thumbnail}
                                                    alt="blog"
                                                />

                                                {/* Top Items */}
                                                <div className="p-6">
                                                    {/* Blog Date */}
                                                    <div className="flex justify-between items-center mb-1">
                                                       
                                                        <div className="flex items-center gap-2">
                                                            <h1 className='tracking-widest text-xs title-font font-medium text-green-400 flex items-center gap-1'>
                                                                <ThumbsUp  className=' w-4 h-4'/>
                                                                {item.blogs?.view}
                                                            </h1>
                                                            <h1 className='tracking-widest text-xs title-font font-medium text-green-400 flex items-center gap-1'>
                                                                <Eye  className=' w-4 h-4'/>
                                                                {item.blogs?.view}
                                                            </h1>
                                                        </div>
                                                        <h2 className="tracking-widest text-xs title-font font-medium text-green-400">
                                                            {date}
                                                        </h2>
                                                    </div>

                                                    {/* Blog Title */}
                                                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                                                        {item.blogs.title}
                                                    </h1>

                                                    {/* Blog Description */}
                                                    <p className="leading-relaxed mb-3">
                                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                                    </p>

                                                    <div className="">
                                                        <Button variant='' className=' w-full bg-green-50 hover:shadow-none shadow-none border text-green-500 border-green-100'>Read More</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <h1>Not Found</h1>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BlogPostCard;
