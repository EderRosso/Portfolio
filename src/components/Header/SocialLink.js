export function SocialLink({url, icon}){
    return(
        <a href={url} target="_blank" rel="noreferrer">
            <i className={icon}></i>    
        </a>
    )
}