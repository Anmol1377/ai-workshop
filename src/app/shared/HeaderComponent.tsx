import Image from "next/image";
export default function HeaderComponent() {
    return (
        <header className="p-6"> 
        <Image 
                src={'https://learning.inc42.com/wp-content/uploads/2025/07/inc42-logo.svg'} alt={"Inc42 Logo"}
                width={90}
                height={0} 
         />
        </header>
    );
}