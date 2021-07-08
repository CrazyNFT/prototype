import Link from "next/link";
import Image from "next/image";


const Navbar = () =>{
    return (
     <div className="head">
   <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image  src="/logo.png" width={128} height={77} />
     </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    <Link href="/"><a class="mr-5 hover:text-gray-900"><span className="txt">Home</span></a></Link>
    <Link href="/Nft"><a class="mr-5 hover:text-gray-900"><span className="txt">CrazyNFT</span></a></Link>
    <Link href="/blog"><a class="mr-5 hover:text-gray-900"><span className="txt">NFT BLOG</span></a></Link>  
   </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    <span className="txt"> LAUNCH APP </span>
      
    </button>
  </div>
  </header>
  </div>    
        
    )
}

export default Navbar;