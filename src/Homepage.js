import React from "react";
import Popular from './Popular';
import { useGlobalContext} from '../context/global';
import styled from 'styled-components';

export default function Homepage(){
    const {handleSubmit,search,searchAnime, handleChange,getUpomingAnime,getAiringAnime,getPopularAnime} = useGlobalContext()
    const [rendered ,setRendered] = useState('popular')
   
    }

    const switchComponent = () =>{
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered ={rendered} />
            case 'upcoming':
                return <Upcoming rendered = {rendered} />
            default :
                return <Popular rendered={rendered} />
        }
    }
          return(

        <HomepageStyled>
            <header>
                <div className="logo">
                    <h1>
                        {rendered === 'popular ? 'Popular Anime' : 
                        rendered === 'airing' ? 'Airing Anime' :  'Upcoming Anime'}
                    </h1>
              
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter ">
                        <button onClick={() =>{
                            setRendered('popular')
                        }}>Popular</button>
                    </div>
                     <form action=""  className="search-form" onSubmit={handleSubmit}>
                        <div className="input">
                            <input type="text" placeholder="Search Anime" value={search} onChange={handleChange}/>
                            <button type="submit" >search</button>

                        </div>
                        <div className="search-results">

                        </div>
                     </form>
                     <div className="filter-btn airing-filter">
                        <button onClick={() =>{
                            setRendered('airing')
                            getAiringAnime();
                        }}>Airing</button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() =>{
                            setRendered('upcoming')
                            getUpcomingAnime();
                        }}>Upcoming</button>
                    </div>
                </div>
            
            </header>
            {switchComponent()}
        </HomepageStyled>
    )
}
const HomepageStyled = styled.div`
  background-color:#EDEDED;
   header{
    padding: 2rem 5rem;
    width:60%;
    margin: 0 auto;
    transition: all .4s ease-in-out;
   }
   .logo{
    
   }
   .search-container{
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
   }
   button{
    display:flex;
    align-items:center;
    outline:none;
    font-size:1.2rem;
    background-color:#fff;
    border-radius:30px;
    gap:1rem;
    padding:.7rem 1.5rem; 
   }
   form{
    position:relative;
    width:100%;
    .input-control{
        position:relative;
        transition:all .4s ease-in-out;
    }
    .input-control input{
        width:100%;
        padding:.7rem 1rem;
        border:none;
        outline:none;
        border-radius:30px;
        font-size:1.2rem;
        background-color:#fff;
        border:5px solid #e5e7eb;
        transition: all .4s ease-in-out;
    }
    .input-control button{
        position:absolute;
        right:0;
        top:50%;
        transform:translateY(-50%);
    }
   }
`