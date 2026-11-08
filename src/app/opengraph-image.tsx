import {ImageResponse} from 'next/og';
export const alt='the jct collective — Clear thinking. Creative doing.';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function OpenGraph(){return new ImageResponse(<div style={{background:'#f7f7f4',color:'#191919',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:'60px',justifyContent:'space-between'}}><div style={{fontSize:30,display:'flex'}}>the jct collective<span style={{color:'#b6382d'}}>.</span></div><div style={{display:'flex',flexDirection:'column',fontSize:96,letterSpacing:-6,lineHeight:1.05}}><span>Clear thinking.</span><span>Creative doing.</span></div><div style={{fontSize:17,borderTop:'1px solid #191919',paddingTop:20}}>INDEPENDENT STRATEGY & CREATIVE STUDIO</div></div>,size);}
