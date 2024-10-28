function ModelItem({name, src}) {
  return (
    <div className="model-item">
      <img src={src} alt="Descripción de la imagen 2" />
      <p>{name}</p>
    </div>
  );
}

export default ModelItem;
