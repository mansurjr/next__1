import { Metadata } from "next";
import UsersDetailClient from "../../../../components/UserDetailView";

type Props = { params: { id: string } };

const getParams = async (params: { id: string }) => {
  return new Promise<{ id: string }>((resolve) => resolve(params));
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await getParams(params);

  const user = await fetch(`https://fakestoreapi.com/users/${id}`).then((res) =>
    res.json()
  );

  const fullName = `${user.name.firstname} ${user.name.lastname}`;

  return {
    title: fullName,
    description: `Username: ${user.username} | Email: ${user.email}`,
    openGraph: {
      images: [
        `https://ui-avatars.com/api/?name=${user.name.firstname}+${user.name.lastname}`,
      ],
    },
  };
}

export default async function UsersDetailPage({ params }: Props) {
  const { id } = await getParams(params); 
  return <UsersDetailClient id={id} />;
}
