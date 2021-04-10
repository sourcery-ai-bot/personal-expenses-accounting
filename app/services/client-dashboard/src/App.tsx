import Main from './App.module.scss';
import { LoginForm } from './components/Login/LoginForm';

function App() {
	return (
		<div className={Main.container}>
			<LoginForm />
		</div>
	);
}

export default App;
