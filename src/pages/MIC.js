import { useRouter } from 'next/router'
import React, { useState, useEffect } from "react";
let MIC=()=>{

    const router = useRouter();
    const data = router.query;
    return(
        <p>wassup{data}</p>
    )
}
export default MIC