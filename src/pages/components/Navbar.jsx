import Link from 'next/link'
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = ()=> {

    return(
        <div className="p-2 bg-blue-200 flex gap gap-2 w-full text-center">
        <div className=" flex justify-start bg-black text-white rounded">logo</div>
            <div className='flex justify-end  gap-2 w-full'>
            <Link href="/" className='p-2 bg-blue-100 rounded-lg'>Home</Link>
            <Link href="/about" className='p-2 bg-blue-100 rounded-lg'>About</Link>
            <Link href="/contact" className='p-2 bg-blue-100 rounded-lg'>Contact</Link>

            <ConnectButton></ConnectButton>
        </div>


    </div>
    )
}


export default Navbar;