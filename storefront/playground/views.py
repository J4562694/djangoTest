from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import SearchLog, Whitelist
from .forms import WhitelistForm

def sayHello(request):
    logs = SearchLog.objects.all()
    driverNames = Whitelist.objects.all()
    return render(request, 'hello.html', {'driverNames': driverNames})

def addWhitelistEntry(request):
    if request.method == 'POST':
        form = WhitelistForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/playground/addWhitelist')
    else:
        form = WhitelistForm()

    return render(request, 'add_whitelist.html', {'form': form})