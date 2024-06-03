from django.shortcuts import render, redirect
from django.http import HttpResponse,JsonResponse
from .models import SearchLog, User
# from .forms import WhitelistForm

def sayHello(request):
    users = User.objects.all().values('name', 'phoneNumber')  # 提取特定字段
    users_list = list(users)  # 将 QuerySet 转换为列表
    response = JsonResponse(users_list, safe=False)
    return response

# def addWhitelistEntry(request):
#     if request.method == 'POST':
#         form = WhitelistForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('/playground/addWhitelist')
#     else:
#         form = WhitelistForm()

#     return render(request, 'add_whitelist.html', {'form': form})