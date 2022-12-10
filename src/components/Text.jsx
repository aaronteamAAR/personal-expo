import Typed from 'typed.js'
import { useEffect, useRef } from "react";
import styles from "../styles/name.module.css"


export default function Type() {
    const TypedElement = useRef(null);

    useEffect(() => {
        if (!TypedElement.current) return;

        const typed = new Typed(TypedElement.current, {
            strings: [
                "Welcome",
                "Thanks for being here",
                "This site is built based on essentialism and simplicity",
                "Now scroll down"
            ],
            startDelay: 200,
            typeSpeed: 200,
            backSpeed: 50,
            backDelay: 500,
            loop: true,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    
  
   return(
    <div>
         <span className={styles.name} ref={TypedElement}></span>
    </div>
   )
   
}


