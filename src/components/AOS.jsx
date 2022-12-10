import React from "react";
import AOS from "aos";
import { useEffect } from  'react';



export default function animate(){
    useEffect(() => {
        AOS.init();
      }, []);

      return (
        <div data-aos="fade-up">hey</div>
      );
}
