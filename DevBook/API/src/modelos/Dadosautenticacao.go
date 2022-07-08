package modelos

// DadosAutenticacao contem o token e o ID do usuário autenticado
type DadosAutenticacao struct {
	ID    string `json:"id"`
	Token string `json:"token"`
}
