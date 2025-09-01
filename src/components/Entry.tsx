function Entry(props: {id: number, title: string, img: {src: string, alt: string}, country: string, dates: string, text: string, googleMapsLink: string}) {
    return(
        <article>
            <div className="content-container">
                <div className="main-image-container">
                    <img src={props.img.src} alt={props.img.alt} className="main-image" />
                </div>
                <div className="content-text">
                    <p>{props.dates}</p>
                    <h2>{props.title}, {props.country}</h2>
                    <p>{props.text}</p>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
            </div>
        </article>
    )
}

export default Entry;