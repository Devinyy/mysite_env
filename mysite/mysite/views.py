from django.shortcuts import render, redirect
from user.forms import LoginForm, RegForm
from django.contrib.auth.models import User

def home(request):
	context = {}
	return render(request, 'home.html',context)

