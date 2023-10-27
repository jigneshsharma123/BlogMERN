import Comment from "../components/Comment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {BiEdit} from "react-icons/bi";
import {MdDelete} from 'react-icons/MD'

const PostDetails = () => {
    return(
        <>
          <div>
            <Navbar />
            <div className="px-8 md:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black md:text-3xl">
                      10 uses of Artifical Intelligence in Day to Day life.
                    </h1>
                    <div className="flex justify-center items-center space-x-2">
                        <p className=""><BiEdit/></p>
                        <p className=""><MdDelete /></p>
                    </div>
                </div>
               <div className="flex items-center justify-between mt-2 md:mt-4">
               <p>@jignesh</p>
                <div className="flex space-x-2">
                    <p>20/02/2023</p>
                    <p>16:45</p>
                </div>
               </div>
             <img src="data:image/jpeg;base64,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" className="w-full mx-auto mt-8" alt="" />
             <p className="mx-auto mt-8 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut odio autem laudantium eligendi? Quasi ipsam iure reprehenderit ducimus, dolor quisquam ratione cupiditate ad neque quia voluptates suscipit incidunt atque recusandae. Aspernatur dolore numquam ex unde obcaecati eos a eius soluta, accusantium exercitationem fugiat officiis, asperiores atque, sapiente beatae laborum? Eligendi unde temporibus excepturi illum deleniti, dolores aliquam, est officia animi quod ad. Quidem, veniam quis assumenda eligendi cumque dignissimos et quam repellat laudantium deleniti nesciunt, nihil aliquid aut provident exercitationem excepturi optio eum est laborum in accusantium aliquam obcaecati ullam? Labore natus, nobis, ea architecto error earum eaque porro rerum, corrupti praesentium similique nesciunt perspiciatis ad officiis nam assumenda numquam. Repudiandae itaque culpa molestias cum labore illo fugiat natus praesentium sed ad omnis ratione debitis iusto expedita, maiores error rerum quo! Facilis ullam officia repellendus unde dolorem necessitatibus cupiditate ex, quas adipisci quis nemo, accusamus expedita et sapiente provident suscipit.</p>
             <div className="flex items-center mt-8 space-x-4 font-semibold">
                <p className="">Categories:</p>
                 <div className="flex justify-center items-center space-x-2">
                    <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                    <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
                    <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                 </div>
             </div>
             {/* comment */}
            <div className="flex flex-col mt-4">
                <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
               <Comment/>
               <Comment/>
               <Comment/>
            
            </div> {/*end of the comment section */}

         

                 {/* write a comment */}
         <div className="w-full flex flex-col mt-4 md:flex-row">
          <input  type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
          <button  className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
         </div>
        </div>
            <Footer />
          </div>
        </>
    )
}
export default PostDetails;