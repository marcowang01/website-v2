"use client"

import { useEffect } from "react";

export default function MarcoPolo() {

  useEffect(() => {
    console.log(
      `
   /'\\_/\`\\                                 
  /\\      \\     __     _ __   ___    ___   
  \\ \\ \\__\\ \\  /'__\`\\  /\\\`'__\\/\'___\\ / __\`\\ 
   \\ \\ \\_/\\ \\/\\ \\L\\.\\_\\ \\ \\//\\ \\__//\\ \\L\\ \\
    \\ \\_\\\\ \\_\\ \\__/.\\_\\\\ \\_\\\\ \\____\\ \\____/
     \\/_/ \\/_/\\/__/\\/_/ \\/_/ \\/____/\\/___/                                   
     ____        ___             
    /\\  _\`\\     /\\_ \\            
    \\ \\ \\L\\ \\___\\//\\ \\     ___   
     \\ \\ ,__/ __\`\\\\ \\ \\   / __\`\\ 
      \\ \\ \\/\\ \\L\\ \\\\_\\ \\_/\\ \\L\\ \\
       \\ \\_\\ \\____//\\____\\ \\____/
        \\/_/\\/___/ \\/____/\\/___/ 
    `
    )
  }, []);

  return (
    <div/>
  )
}
