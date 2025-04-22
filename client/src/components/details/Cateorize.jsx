const titleStyles = "flex items-center gap-2 mb-4";

export default function Cateorize({ Icon, title, categories }) {
  return <div className="mb-8">
    <p className={titleStyles}><Icon className="logo-md" />{title}</p>

    <div className="flex flex-wrap gap-2">
      {categories.map((category, index) =>
        <span key={index} className="bg-2 px-4 py-2 border-2 border-[#262626] rounded-md">{category}</span>
      )}
    </div>

  </div>
}