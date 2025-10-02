import { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailProductClient from "../../../../components/ProductDetailView";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}

export async function generateStaticParams() {
  const data = await fetch("https://fakestoreapi.com/products?limit=100").then(
    (res) => res.json()
  );
  return data.map((pro: any) => ({
    id: pro.id.toString(),
  }));
}

export default async function DetailProduct({ params }: Props) {
  const { id } = await params;

  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) notFound();

  const data = await response.json();

  return <DetailProductClient product={data} />;
}
