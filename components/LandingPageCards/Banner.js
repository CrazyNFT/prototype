import { Container, Header } from 'semantic-ui-react'
import { Grid} from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
const Banner = () => {
    return (  
        
      <>
        
        <section class="text-gray-600 body-font">
        
        <div class="container px-5 py-24 mx-auto flex flex-col">
          
        <div class="lg:w-4/6 mx-auto">
          
        <div class="rounded-lg h-64 overflow-hidden">

        <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/> 

        </div>  
        <div class="flex flex-col sm:flex-row mt-10">


        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">


        <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/400x260"/>

        </div>

        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <p class="leading-relaxed text-lg mb-4 ">

Token
Token economy is built around the AIRT Token, <br/> a unit of value on the platform that enables token holders<br/> to use applications on this platform, participate in network governance, <br/>and earn additional token rewards by using this project. 


        </p>

        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Earn Airt
</button>



          
        </div>
        </div>
          
        </div>  
          
          
          
          
          
          
        </div> 
    




        </section>
    
      </>

    );
}

export default Banner;