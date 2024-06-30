import { Film } from "lucide-react";
import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="flex justify-between bg-slate-800 w-full p-4 ">
        <div className="flex gap-3 items-center">
          <Film className="text-amber-400 size-{28}" />
          <Link href="/">
            <h1 className="text-amber-400 text-2xl font-bold uppercase"> FilmesAlan</h1>
          </Link>
          
        </div>
        
        <Link className="text-amber-300"  href="/sobre">Sobre</Link>

      </nav>
    )
}