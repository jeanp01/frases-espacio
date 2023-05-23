import "./styles/quotebox.css"

const QuoteBox = ({phrase, handleChangeQuote}) => {
    return (
        <section className="quotebox">

        <article className="quotebox--phrase">
        <p className="parrafo">{phrase}</p>
        </article>

        <button className="quotebox--btn" onClick={handleChangeQuote}><img src="/public/images/Vector.png" alt="" /></button>

    </section>
    )
}

export default  QuoteBox