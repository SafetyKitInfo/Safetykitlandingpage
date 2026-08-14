export default function ToolsRoute() {
  return null;
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: '/#tools',
      permanent: false,
    },
  };
}
