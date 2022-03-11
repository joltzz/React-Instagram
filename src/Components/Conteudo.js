import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

const stories = [
    { user: '9gag' },
    { user: 'barked' },
    { user: 'meowed' },
    { user: 'nathanwpylestrangeplanet' },
    { user: 'wawawicomics' },
    { user: 'respondeai' },
    { user: 'filomoderna' },
    { user: 'memeriagourmet' }
]

const posts = [
    {
        user: '9gag',
        img: 'dog.svg',
        likes: 'wawawicomics',
        text: 'outras 29.973 pessoas'
    },
    {
        user: 'meowed',
        img: 'gato-telefone.svg',
        likes: 'nathanwpylestrangeplanet',
        text: 'outras 108.478 pessoas'
    },
    {
        user: 'barked',
        img: 'dog.svg',
        likes: 'respondeai',
        text: 'outras 192.446 pessoas'
    }
]

export default function Conteudo() {
    return (
        <div>
            <div class="stories">
                {stories.map((s) => (
                    <Stories user={s.user} />
                ))}
            </div>
            <div class="posts">
                {posts.map((p) => (
                    <Posts user={p.user} img={p.img} likes={p.likes} text={p.text} />
                ))}
            </div>
            <div class="usuarios">
                <Sidebar />
            </div>
        </div>
    );
}