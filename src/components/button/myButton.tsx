interface Props{
    children:string
}

function MyButton({children}:Props) {
    return <>
        <button className="m-4 rounded-lg bg-[#21cdc0] p-4 outline-black hover:bg-[#213360] text-white font-bold ">{children}</button>
    </>;
}

export default MyButton;