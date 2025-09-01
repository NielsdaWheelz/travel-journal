function Entry(props: {entry: {id: number, title: string, img: {src: string, alt: string}, country: string, dates: string, text: string, googleMapsLink: string}}) {
    return(
        <article>
            <div className="content-container">
                <div className="main-image-container">
                    <img src={props.entry.img.src} alt={props.entry.img.alt} className="main-image" />
                </div>
                <div className="content-text">
                    <p>{props.entry.dates}</p>
                    <h2>{props.entry.title}, {props.entry.country}</h2>
                    <p>{props.entry.text}</p>
                    <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                </div>
            </div>
        </article>
    )
}

export default Entry;