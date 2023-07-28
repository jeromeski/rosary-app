// import { useRef, useEffect, useState } from 'react';
// import { apostlesCreed } from 'public/assets/audio/apostles-creed.mp3';
// import { fatimaPrayer } from 'public/assets/audio/fatima-prayer.mp3';

// const srcBlessSelf = "/assets/audio/bless-self-prayer.mp3";
// const srcApostlesCreed = "assets/audio/apostles-creed.mp3";
// const srcOurFather = "assets/audio/our-father.mp3";
// const srcHailMary = "assets/audio/hail-mary.mp3";
// const srcGloryBe = "assets/audio/glory-be.mp3";
// const srcFatimaPrayer = "assets/audio/fatima-prayer.mp3";
// const srcFirstJoyful = "assets/audio/first-joyful.mp3";



// export default function useControlIntro(){
//   // const [blessSelf, setBlessSelf] = useState(null)
  
//   // useEffect(() => {
//   //   if(blessSelfSrc) {
//   //    setBlessSelf(new Audio(blessSelfSrc)) 
//   //   }
//   // },[])

//   let blessSelf = useRef(null);
//   let apostlesCreed = useRef(null);
//   let ourFather = useRef(null);
//   let hailMary = useRef(null);
//   let gloryBe = useRef(null);
//   let fatimaPrayer = useRef(null)


//   useEffect(() => {
//     blessSelf.current = new Audio(srcBlessSelf);
//     apostlesCreed.current = new Audio(srcApostlesCreed);
//     ourFather.current = new Audio(srcOurFather);
//     hailMary.current = new Audio(srcHailMary);
//     gloryBe.current = new Audio(srcGloryBe);
//     fatimaPrayer.current = new Audio(srcFatimaPrayer);
//   },[])
  
//   return {blessSelf, apostlesCreed, ourFather, hailMary, gloryBe, fatimaPrayer}
// }