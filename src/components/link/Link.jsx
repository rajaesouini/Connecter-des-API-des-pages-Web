// le parametre props recupere les props crees dans le composant parent

// const Link = (props) => {
// //   console.log(props);
//     return <a href= {`https://${props.href}`} style={{color: props.color}}>{ props.label }</a>;
// }

//recuperer les props en decomposant l'objet

const Link = ({ label, href, color }) => {
    return <a href={`https://${href}`}>{label}</a>
}

export default Link; 