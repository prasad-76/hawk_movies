import { Link } from 'react-router-dom';

export default function SearchResult() {
  return <Link to="" className="mb-8 flex items-start gap-4 opacity-70 hover:opacity-100">
    <img
      src="/banner.jpg"
      className="min-w-[80px] h-[80px] object-cover" />
    <div>
      <h3 className="mb-2">This is a movie</h3>
      <p className="leading-tight">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, consectetur laborum. Corrupti, nostrum cupiditate ipsam ad praesentium recusandae totam ullam?</p>
    </div>
  </Link>
};
