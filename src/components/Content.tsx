function Content(props: {title: string, img: {src: string, alt: string},  location: string, date: string, description: string, mapLink: string}) {
    return(
        <article>
            <div className="content-container">
                <div className="main-image-container">
                    <img src={props.img.src} alt={props.img.alt} className="main-image" />
                </div>
                <div className="content-text">
                    <p>{props.date}</p>
                    <h2>{props.title}, {props.location}</h2>
                    <p>{props.description}</p>
                    <a href={props.mapLink}>View on Google Maps</a>
                </div>
            </div>
        </article>
    )
}

export default Content;