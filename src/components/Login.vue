<template>
    <div>
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="/static/assets/favicon.ico" type="image/x-icon">

        <title>
            Flask AdminLTE - {% block title %}{% endblock %} | AppSeed
        </title> 

        <!-- Specific Page CSS goes HERE  -->  
        {% block stylesheets %}{% endblock stylesheets %}
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
                    {% if msg %}
                        {{ msg | safe }}
                    {% else %}
                        Use default credentials: <strong>test / pass</strong>
                    {% endif %}
                </p>

                <form method="post" action="">

                {{ form.hidden_tag() }}

                <div class="input-group mb-3">
                    {{ form.username(placeholder="Username", class="form-control") }}
                    <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                    </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                    {{ form.password(placeholder="Password", class="form-control", type="password") }}
                    <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                    <div class="icheck-primary">
                        <input type="checkbox" id="remember">
                        <label for="remember">
                        Remember Me
                        </label>
                    </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-4">
                    <button type="submit" name="login" class="btn btn-primary btn-block">Sign In</button>
                    </div>
                    <!-- /.col -->
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