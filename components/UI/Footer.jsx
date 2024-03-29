export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 border-t">
      <div className="container m-auto py-2 text-sm text-gray-400 flex justify-between items-center">
        <p>Todos los derechos reservados</p>
        <p>
          Desarrollado por{" "}
          <a href="http://gastongracis.dev" target="_blank">
            Gastón Gracis
          </a>
        </p>
      </div>
    </footer>
  );
}
