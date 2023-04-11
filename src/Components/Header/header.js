import React, { useEffect, useState ,useCallback} from 'react'
import './header.styles.css'
import { YOUTUBE_SEARCH_API } from '../../Utills/Constants'
import { useSelector,useDispatch } from 'react-redux'
import { addData } from '../../Utills/searchSlice'
const Header = () => {
  const cachedData=useSelector((state)=>state.search.searchCache);
  const dispatch=useDispatch();
  const [searchQuery,setSearchQuery]=useState('');
  const [data,setData]=useState([]);
  const [showSearch,setShowSearch] = useState(false);
  
  const getData=useCallback(()=>{
    let dataCache=cachedData.filter(data=>data[0]===searchQuery);
    if (dataCache.length>0)
    {
      setData(dataCache[0])
    }
    else{
      fetch(YOUTUBE_SEARCH_API+searchQuery).then(data=>{return data.json()}).then(data=>{
      setData(data) 
      dispatch(addData(data))});
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchQuery]);
  useEffect(()=>{
    const interval=setTimeout(()=>{
      getData();
    },100);
    return ()=>{
      clearTimeout(interval)}
  },[getData])
  return (
    
    <div className='header'>
      <div className='left-header'>
          <img className="icon" src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="} alt=""/>
          <img className="logo" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"} alt=""/>
      </div>
      <div className='search-header'>
        <input value={searchQuery}
          type="text"
          placeholder="Search" 
          className="search-input"
          onChange={(e)=>{setSearchQuery(e.target.value)}}
          onFocus={()=>setShowSearch(true)}
          onBlur={()=>setShowSearch(false)}
          />
        <button className="search-button">Search</button>
        {showSearch && <div className='suggestion-container'>
            <ul className='ul-element'>
              {data[1].map((d,i)=>(
              <li className='list' key={i}>
                <span className='search-span'>
                  🔎
                </span>
                <span>
                  {d}
                </span>
              </li>))}
            </ul>
        </div>} 
      </div>
      <div className='user-header'>
        <img alt="user" src={"https://www.vhv.rs/dpng/d/421-4213525_png-file-svg-single-user-icon-png-transparent.png"} className='icon-user'/>
      </div>
    </div>
  )
}

export default Header