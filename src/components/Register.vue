<template>
    <div>
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="/static/assets/favicon.ico" type="image/x-icon">

        <title>
            Flask AdminLTE - {% block title %}{% endblock %} | AppSeed
        </title> 

        <div class="register-box">

            <div class="login-logo">
                <a target="_blank" rel="noopener noreferrer" 
                href="https://appseed.us/admin-dashboards/flask-dashboard-adminlte">Flask <b>Admin</b>LTE</a>
            </div>    

            <div class="card">
            <div class="card-body register-card-body">
                <p class="login-box-msg">
                    {% if msg %}
                        <span class="text-danger">{{ msg | safe }}</span>
                    {% else %}
                    <span>
                        Add your credentials
                    </span>
                    {% endif %}            
                </p>

                <form role="form" method="post" action="">

                {{ form.hidden_tag() }}

                <div class="input-group mb-3">
                    {{ form.username(placeholder="Username", class="form-control") }}
                    <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-user"></span>
                    </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                    {{ form.email(placeholder="Email", class="form-control") }}
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
                        <input type="checkbox" id="agreeTerms" name="terms" value="agree">
                        <label for="agreeTerms">
                        I agree to the <a href="#">terms</a>
                        </label>
                    </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-4">
                    <button type="submit" name="register" class="btn btn-primary btn-block">Register</button>
                    </div>
                    <!-- /.col -->
                </div>
                </form>

                <br />
                <div class="text-center">
                    Have an account? <a href="{{ url_for('base_blueprint.login') }}" class="text-center">Login</a>
                    <br />
                    <br />
                    &copy; ColorLib 
                    <a target="_blank" rel="noopener noreferrer"
                    href="https://appseed.us/admin-dashboards/flask-dashboard-adminlte"><b>Admin</b>LTE</a> 
                    - coded by <a target="_blank" rel="noopener noreferrer" href="https://appseed.us">AppSeed</a>.
                </div>

            </div>
            <!-- /.form-box -->
            </div><!-- /.card -->
        </div>

        </head>
        <body class="hold-transition {% block body_class %}{% endblock body_class %}">
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>