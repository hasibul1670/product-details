import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  console.log("Hello", product);
  const { name,_id, price, image_url, category, stock, currency } = product;
 
  return (
    <div className="card w-64 p-2 border-solid border-2 border-sky-500 shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
      <figure className="px-6 pt-2">
        <Image
          alt="example"
          className="bg-red-500"
          src={image_url}
          height={200}
          width={200}
          responsive
        />
      </figure>
      <div className="card-body items-center text-center py-3">
        <h6 className="font-bold text-cyan-700 ">{name}</h6>
        <p className=" text-cyan-700 ">Category:{category}</p>
        <p className="text-bold text-cyan-400">Stock Available:{stock}</p>
        <h6 className="font-bold  ">
          {price} {currency}
        </h6>

        <Link href={`/products/${_id}`}>
          <button className="btn  btn-primary  btn-sm">Show Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
