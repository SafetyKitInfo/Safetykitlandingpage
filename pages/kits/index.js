export default function KitsRoute() {
  return null;
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: '/#how-it-works',
      permanent: false,
    },
  };
}
