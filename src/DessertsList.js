function DessertsList(props) {
  const lowCalDessertsList = props.data
    .filter((desserts) => desserts.calories <= 500)
    .sort((a, b) => a.calories - b.calories)
    .map((desserts) => {
      const itemText = `${desserts.name} - ${desserts.calories} cal`;
      return <li key={desserts.name}>{itemText}</li>;
    });

  return <ul>{lowCalDessertsList}</ul>;
}

export default DessertsList;
