// React
import { FunctionComponent, useState } from 'react';
// NextjsAuth
import { useSession } from 'next-auth/client'
// Components
import CommentBox from '@/components/comments/commentBox';
import Form from '@/components/posts/form';
// Api
import { handlePost, UPDATE_POST, DELETE_POST } from '@/pages/api/posts';
import { deleteComments } from '@/pages/api/comments';
// Utils
import { redirectTo, isAdmin } from '@/utils/index';
// Interfaces
import { Post, Comment } from '@/interfaces/index';

const editorOpts = {
  showPathLabel: false,
  buttonList: [
    ['undo', 'redo'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['removeFormat'],
    ['outdent', 'indent'],
    ['fullScreen', 'showBlocks', 'codeView']
  ]
};

const PostDetail: FunctionComponent<Post> = (post: Post) => {
  const [session] = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [comments, setComments] = useState(post?.comments?.data)
  const { _id, title, body, createdAt }: Post = {...post};

  const submitPost: Function = (data) => {
    const date = new Date().toISOString();
    const json = {...data,
      updatedAt: date
    }

    setSubmitting(true);
    handlePost(UPDATE_POST, json, _id).then(res => {
      setSubmitting(false);
      redirectTo('/posts');
    });
  };

  const deletePost: Function = (id) => {
    setSubmitting(true);
    handlePost(DELETE_POST, null, id).then(res => {
      deleteComments(comments.map((comment: Comment) => comment._id));
      setSubmitting(false);
      redirectTo('/posts');
    });
  };
  const epa = `
    <div class="jsx-611969985 post-image"><div><div><img alt="Me tomo un descanso" src="/_next/image?url=%2Fimages%2Fblog-images%2Faaron-burden-2bg1jPty490-unsplash.jpg&amp;w=1200&amp;q=75" srcset="/_next/image?url=%2Fimages%2Fblog-images%2Faaron-burden-2bg1jPty490-unsplash.jpg&amp;w=320&amp;q=75 320w, /_next/image?url=%2Fimages%2Fblog-images%2Faaron-burden-2bg1jPty490-unsplash.jpg&amp;w=420&amp;q=75 420w, /_next/image?url=%2Fimages%2Fblog-images%2Faaron-burden-2bg1jPty490-unsplash.jpg&amp;w=768&amp;q=75 768w, /_next/image?url=%2Fimages%2Fblog-images%2Faaron-burden-2bg1jPty490-unsplash.jpg&amp;w=1024&amp;q=75 1024w, /_next/image?url=%2Fimages%2Fblog-images%2Faaron-burden-2bg1jPty490-unsplash.jpg&amp;w=1200&amp;q=75 1200w"></div></div></div><time datetime="2021-04-03T00:00:00.000Z" class="jsx-2491449252 date">3 de abril de 2021</time><h1 class="jsx-611969985 title">Me tomo un descanso</h1><p>Comencé a hacer mentorías en agosto del 2019, tras varios meses dándole vueltas a la idea y a cómo ejecutarla. Desde entonces, esta actividad me ha dado muchísima satisfacción. No en vano, el verano pasado hice <a href="/blog/un-año-haciendo-mentoria-a-desarrolladores">un balance muy positivo</a>. Pero desde hace unos meses he empezado a verlo como una obligación. Quienes me conocen desde hace años, sabrán que cuando algo que me gusta se convierte en algo que "me obligo" a hacer, mi reacción natural es dejarlo. Siempre me pasa lo mismo.</p><h3>Hace mucho tiempo, en una galaxia no tan lejana...</h3><p>Hace ya bastantes años, cuando la Tierra aún estaba caliente, escribía en <a href="https://web.archive.org/web/20101213222350/http://dandel.net/">un blog personal</a>. Hoy todo el mundo tiene Twitch, YouTube y tal, pero los <em>millennials</em> teníamos blogs. En mi blog escribía de todo, sobre todo cosas que me gustaba hacer, pero también anécdotas y vivencias personales. Un día empecé a escribir sobre videojuegos y me di cuenta de que a la gente le gustaba mucho ese tema. Así que poco a poco me fui especializando, atrayendo cada vez a más y más visitantes. Mi blog llegó a ser moderadamente conocido. Las empresas de videojuegos me enviaban notas de prensa, copias de sus juegos para probarlas y analizarlas, me invitaban a eventos y presentaciones... Nunca llegó a ser una referencia en el sector, pero lo conocía bastante gente.</p><p>Pero llegó un punto en el que para seguir creciendo, tenía que dedicarle más tiempo. Además no solo escribía de las cosas que me gustaban, sino de las que "había que escribir" para ganar tráfico o intentar hacerte viral. Con los juegos me pasaba lo mismo. No solo tenía que jugar a los que me gustaban, sino a los que no. Todo esto lo tenía que compaginar con mi trabajo de 40 horas semanales y mi vida personal, sin generar ni un ingreso. Poco a poco me fui dando cuenta de que ya no me gustaba ni escribir ni jugar a videojuegos. Llegué a aborrecer algo que me apasionaba por verlo como una obligación.</p><p>En realidad creo que no me he recuperado hasta hace un par de años. Estuve mucho tiempo sin jugar a prácticamente nada. Solo a juegos que no me exigían demasiado y que podía dejar en cualquier momento. No me interesaban los lanzamientos ni las novedades, cuando antes podía pasarme una semana sin dormir durante los días de <a href="https://e3expo.com/">la feria E3</a>. También pasé muchos años sin ganas de escribir. Poco a poco he ido recuperando esas ganas y he podido escribir algunos artículos en este blog que estás leyendo.</p><h3>Por qué me tomo un descanso</h3><p>¿Qué tiene que ver esto con las mentorías? Bueno, hay muchos paralelismos. Empecé a hacerlo porque quería poner mi experiencia al servicio de gente que la necesitaba. Me alegraba sentir que podía ayudar a otras personas y me llenaba de energía sentir su agradecimiento. Con el tiempo, el boca a boca ha hecho que esté recibiendo varias solicitudes de mentoría a la semana. Muchas más de las que puedo asumir. Para que te hagas una idea, estoy rechazando 9 de cada 10 solicitudes que recibo.</p><p>Estoy haciendo varias sesiones a la semana, incluidos fines de semana. Con personas distintas. Cada una con un contexto diferente, proyectos de pair programming que hacemos juntos, procesos de selección en los que están inmersas... Está claro desde hace tiempo que esta actividad no escala más allá de mi poco tiempo libre.</p><p>Otro factor que ha hecho que necesite tomarme un descanso es que en diciembre comencé en un nuevo trabajo, con un nuevo rol. Llevaba años preparándome para una oportunidad así y hay muchas cosas que tengo que aprender, libros que leer y cursos que hacer. Yo mismo necesito mi tiempo libre para formarme y poder hacer mejor mi trabajo. Hacer mentorías en realidad me ha ayudado a estar mejor preparado para desempeñarme en este rol, pero ahora siento que necesito invertir más tiempo en consolidarme y dedicarme a mi propia carrera.</p><p>Me tomo un descanso porque no quiero acabar igual que cuando escribía en mi blog sobre videojuegos. Quiero echar el freno antes de que esto deje de gustarme. Seguiré con las personas con las que ya tenía un compromiso, pero no aceptaré nuevas solicitudes durante un tiempo. No sé cuánto durará este tiempo ni quiero decidirlo ahora. Mientras tanto, pensaré en cómo volver para que esto siga llegando a gente que lo necesita y a mi no me suponga un esfuerzo que no puedo asumir.</p><h3>Qué voy a hacer a partir de ahora</h3><p>Quiero recuperar mi tiempo para leer, formarme y aprender a hacer mejor mi trabajo. Quiero sacar ganas para escribir, ya que es una de las cosas que más me gusta hacer. Quiero tener la mente despejada para pensar en cómo volver. Algunas ideas que me rondan ahora mismo son escribir un libro, grabar un curso o hacer un taller online. Necesito descubrir qué es lo que más me apetece. Mientras tanto, nos vemos en mis redes sociales. Especialmente <a href="https://twitter.com/d4nidev">en Twitter</a>, que es donde estoy más activo.</p><p>👋 ¡Nos leemos!</p><p><small>Foto de la cabecera de <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Aaron Burden</a> en <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></small></p>"
  `;
  return(
    <>
      {isAdmin(session) ? (
        <div>
          <Form data={post} handleSubmit={(data) => submitPost(data)} handleDelete={() => deletePost(_id)}/>
        </div>
      ) : (
        <div>
          {/* <p>{title}</p>
          <p>{body}</p>
          <p>{createdAt}</p> */}
          <div className="post detail"dangerouslySetInnerHTML={{__html: epa}}></div>
        </div>
      )}

      {/* <CommentBox parent={post} comments={comments} buttonText={'Add comment'} updateComments={(newComments) => setComments(newComments)}/> */}
    </>
  )
}

export default PostDetail
