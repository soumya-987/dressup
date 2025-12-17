import { useState } from 'react'
import cap1 from '../assets/cap1.png'
import character from '../assets/character.png'
import jacket1 from '../assets/jacket1.png'
import jacket2 from '../assets/jacket2.png'
import jean1 from '../assets/jean1.png'
import jean2 from '../assets/jean2.png'
import leg1 from '../assets/leg1.png'
import leg2 from '../assets/leg2.png'
import leg3 from '../assets/leg3.png'
import leg4 from '../assets/leg4.png'
import skirt1 from '../assets/skirt1.png'
import skirt2 from '../assets/skirt2.png'
import skirt3 from '../assets/skirt3.png'
import sweat1 from '../assets/sweat1.png'
import sweat2 from '../assets/sweat2.png'
import sweat3 from '../assets/sweat3.png'
import top1 from '../assets/top1.png'
import top2 from '../assets/top2.png'
import fairy from '../assets/fairy.png'



function Dress(){
    const [scene,setscene]=useState("dressing");
    const [showModal,setshowModel]=useState(true);
    const [category,setcategory]=useState("Top");
    const [slots,setSlots]=useState({
        cap:{img:null,class:""},
        jacket:{img:null,class:""},
        jean:{img:null,class:""},
        leg:{img:null,class:""},
        skirt:{img:null,class:""},
        sweat:{img:null,class:""},
        top:{img:null,class:""}


    })
    if (scene==="dressing")
    {
        return (
        <>
        <style>{`
            body{
                background-image: url("/back.png");
                background-size: cover;
                background-position: center;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        `}</style>
        {showModal && 
        (
            <>
            <div className="modal" tabIndex="-1" style={{display:"block"}}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Welcome to the Dress-Up Game!</h5>
                    <button type="button" className="btn-close" onClick={()=> setshowModel(false)}></button>
                </div>
                <div className="modal-body">
                    <p>Style your character and get her ready for the pageant 🎀</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={()=>setshowModel(false)}>Start Styling</button>
                </div>
                </div>
            </div>
            </div>
            <img src={fairy} className='girly'/>
            <div className="modal-backdrop fade show"></div>

            </>
        )}
        
        <div className='game-container'>
            <h1 className='head'>DRESS UP Game</h1>
            <img src={slots.cap.img} className={`layer cap ${slots.cap.class}`} />
            <img src={character} className="layer character"/>
            <img src={slots.jacket.img} className={`layer jacket ${slots.jacket.class}`}/>
            <img src={slots.jean.img} className={`layer jean ${slots.jean.class}`}/>
            <img src={slots.leg.img} className={`layer leg ${slots.leg.class}`}/>
            <img src={slots.skirt.img} className={`layer skirt ${slots.skirt.class}`}/>
            <img src={slots.sweat.img} className={`layer sweat ${slots.sweat.class}`}/>
            <img src={slots.top.img} className={`layer top ${slots.top.class}`}/>
            
        </div>
        <div className='buttons'>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <button class="nav-link " onClick={()=>setcategory("Top")}>Top</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link " onClick={()=>setcategory("Jean")}>Jean</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link " onClick={()=>setcategory("Dress")}>Dress</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link " onClick={()=>setcategory("Jacket")}>Jacket</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" onClick={()=>setcategory("Sweater")}>Sweater</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" onClick={()=>setcategory("Shoe")}>Shoe</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" onClick={()=>setcategory("Cap")}>Cap</button>
                </li>

            </ul>
            <button className="uhu" onClick={()=> setscene("peagent")}>go to peagent</button>
            
                {category==="Top" && 
                <>
                    <button onClick={()=>setSlots(
                        s=>({...s,top:{ img:top1, class: "top1" }}))}>
                        Top 1
                    </button>
                    <button onClick={()=> setSlots(
                        s=>({...s,top:{ img:top2,class:"top2"}}))}>
                        Top 2
                    </button>
                    <button onClick={()=> setSlots(s=>({...s,top:{img:null,class:"remove"}}))}>
                        R top
                    </button>
                </>}
                {category==="Sweater" && 
                <>
                    <button onClick={()=>setSlots(
                        s=>({...s,sweat:{ img:sweat1, class: "sweat1" }}))}>
                        Sweat 1
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,sweat:{ img:sweat2, class: "sweat2" }}))}>
                        Sweat 2
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,sweat:{ img:sweat3, class: "sweat3" }}))}>
                        Sweat 3
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,sweat:{ img:null, class: "remove" }}))}>
                        R sweat
                    </button>
                </>}
                {category==="Dress" && 
                <>
                    <button onClick={()=>setSlots(
                        s=>({...s,skirt:{ img:skirt1, class: "skirt1" }}))}>
                        skirt 1
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,skirt:{ img:skirt2, class: "skirt2" }}))}>
                        skirt 2
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,skirt:{ img:skirt3, class: "skirt3" }}))}>
                        skirt 3
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,skirt:{ img:null, class: "remove" }}))}>
                        R skirt
                    </button>
                </>}
                {category==="Shoe"&&
                <>
                    <button onClick={()=>setSlots(
                        s=>({...s,leg:{ img:leg1, class: "leg1" }}))}>
                        shoe 1
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,leg:{ img:leg2, class: "leg2" }}))}>
                        shoe 2
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,leg:{ img:leg3, class: "leg3" }}))}>
                        shoe 3
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,leg:{ img:leg4, class: "leg4" }}))}>
                        shoe 4
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,leg:{ img:null, class: "remove" }}))}>
                        r shoe
                    </button>
                </>}
                {category==="Jean"&&
                <>
                    <button onClick={()=>setSlots(
                        s=>({...s,jean:{ img:jean1, class: "jean1" }}))}>
                        jean 1
                    </button><button onClick={()=>setSlots(
                        s=>({...s,jean:{ img:jean2, class: "jean2" }}))}>
                        jean 2
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,jean:{ img:null, class: "remove" }}))}>
                        r jean
                    </button>
                </>}
                {category==="Jacket"&&
                <>
                    <button onClick={()=>setSlots(
                        s=>({...s,jacket:{ img:jacket1, class: "jacket1" }}))}>
                        jacket 1
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,jacket:{ img:jacket2, class: "jacket2" }}))}>
                        jacket 2
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,jacket:{ img:null, class: "remove" }}))}>
                        r jacket
                    </button>
                </>}
                {category==="Cap"&&
                <>
                    <button onClick={()=>setSlots(
                        s=>({...s,cap:{ img:cap1, class: "cap1" }}))}>
                        cap 1
                    </button>
                    <button onClick={()=>setSlots(
                        s=>({...s,cap:{ img:null, class: "remove" }}))}>
                        r cap
                    </button>
                </>}
            </div>
        </>
    )

    }
    if (scene==="peagent"){
        return(
            <>
            <style>
                {`

            body{
                background-image: url("/back2.png");
                background-size: cover;
                background-position: center;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        `}
            </style>
            <div className='game-container'>
            <h1 className='head'>Peagent</h1>
            <img src={slots.cap.img} className={`layer cap ${slots.cap.class}`} />
            <img src={character} className="layer character"/>
            <img src={slots.jacket.img} className={`layer jacket ${slots.jacket.class}`}/>
            <img src={slots.jean.img} className={`layer jean ${slots.jean.class}`}/>
            <img src={slots.leg.img} className={`layer leg ${slots.leg.class}`}/>
            <img src={slots.skirt.img} className={`layer skirt ${slots.skirt.class}`}/>
            <img src={slots.sweat.img} className={`layer sweat ${slots.sweat.class}`}/>
            <img src={slots.top.img} className={`layer top ${slots.top.class}`}/>
            
        </div>
            </>
        )
    }
}
export default Dress;