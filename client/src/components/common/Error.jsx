export default function Error({cardsType, styles}) {
  return <div className={`${cardsType} ${styles} rounded-lg`}>
    <div className="flex items-center justify-center gap-8 carousel-card my-4 h-64">
      <img
        src="/error.png"
        className="h-40 object-contain"
      />
      <div>
        <h2>Error 404!</h2>
        <p className="hidden md:block max-w-[40ch]">Resource you are looking for isn't available right now. Or some error occured while fetching the data, stay tuned for updates!</p>
      </div>
    </div>
  </div>
}