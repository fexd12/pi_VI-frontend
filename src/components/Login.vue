<template>
    <div>
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="/static/assets/favicon.ico" type="image/x-icon">

        <title>

        </title> 

        <!-- Specific Page CSS goes HERE  -->  

        </head>

                
        <div class="login-box">

            <div class="login-logo">
                <a target="_blank" rel="noopener noreferrer" 
                href="https://appseed.us/admin-dashboards/flask-dashboard-adminlte">Flask <b>Admin</b>LTE</a>
            </div>

            <!-- /.login-logo -->
            <div class="card">
            <div class="card-body login-card-body">

                    <p class="login-box-msg">
                        {{ msg | safe }}
                        Use default credentials: <strong>test / pass</strong>
                </p>

                <form method="post" action="">
                    <div class="form-group">
                        <label for="email"> Email</label>
                        <input type="email" class="form-group" id="email"  placeholder="Insira o Email">
                        <span class="fas fa-envelope"></span>
                    </div>
                    <div class="form-group">
                        <label for="password">Senha</label>
                        <input type="password" class="form-group" id="password" placeholder="Insira a Senha">
                        <span class="fas fa-lock"></span>
                    </div>
                    <button type="submit" class="btn btn-primary">Concluir</button>

                <div class="row">
                    <div class="col-8">
                    <div class="icheck-primary">
                        <input type="checkbox" id="remember">
                        <label for="remember">Cadastrar</label>
                    </div>
                    </div>
                    <div class="col-4">
                    <button type="submit" name="login" class="btn btn-primary btn-block">Entrar</button>
                    </div>

                </div>
                </form>

                <br /><br />

                <div class="text-center">
                    Not a member? <a href="{{ url_for('base_blueprint.register') }}" class="text-center">Register</a>
                    <br />
                    <br />
                    &copy; ColorLib 
                    <a target="_blank" rel="noopener noreferrer"
                    href="https://appseed.us/admin-dashboards/flask-dashboard-adminlte"><b>Admin</b>LTE</a> 
                    - coded by <a target="_blank" rel="noopener noreferrer" href="https://appseed.us">AppSeed</a>.
                </div>

            </div>
            <!-- /.login-card-body -->
            </div>

        </div>
    
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>