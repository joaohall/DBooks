interface data {
  title: string;
  image: string;
  rating: number;
  price: number;
  sizes: Array<number>;
}

interface sizes {
  sizes: Array<number>;
}


export default function Product({ title, image, rating, price, sizes }: data) {

  const Sizes = ({ sizes }: sizes) => {
    return (
      <div>
        {sizes.map((transfer) => (
          <div key={transfer}>
            <p>{transfer}</p>
          </div>
        ))}
      </div>
    );
  };
  return (
    <section>
      <img src={image} width={100} height={100} alt="Imagem do produto" />
      <div>
        <p>{title}</p>
        <h1>{price}</h1>
        <p>{sizes}</p>
        <a>{rating}</a>
        <Sizes sizes={[32,23,14,42]} />
      </div>
    </section>
  );
}
