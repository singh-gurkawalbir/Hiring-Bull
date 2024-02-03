import IdeaList from '../components/IdeaList';
import IdeaForm from '../components/IdeaForm';
import { useCollection } from '../hooks/useCollection';
export default function Home() {

  const {docs: ideas}= useCollection('ideas')
  

  return (
    <div className='App'>
      {ideas && <IdeaList ideas={ideas} />}
      <IdeaForm />
    </div>
  );
}
