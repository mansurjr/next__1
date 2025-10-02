import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

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

import UsersDetailClient from "../../../../components/UserDetailView";

export default function UsersDetailPage({ params }: Props) {
  return <UsersDetailClient id={params.id} />;
}
