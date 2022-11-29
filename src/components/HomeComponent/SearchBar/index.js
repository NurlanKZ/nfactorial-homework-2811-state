import { MAGNIFIER_IMG_PATH } from '../images'

export default function SearchBar({enterPressed, onChangeSearchInput, searchContent}){
    return(
        <div className="p-3 m-3 d-flex gap-2" style={{width: 'auto', height: '50px', border:'none', borderRadius: '34px', outline: 'none', backgroundColor: '#f0f0fa'}}>
            <img src={MAGNIFIER_IMG_PATH} style={{alignSelf: 'center', width: '20px', height: '20px'}}/>
            <input onKeyDown={enterPressed} onChange={onChangeSearchInput} value={searchContent} placeholder='Search Twitter' style={{border:'none', fontSize:16, outline: 'none', backgroundColor: '#f0f0fa'}}/>
        </div>
    )
}