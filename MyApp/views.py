from django.shortcuts import render
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.
def index(re):
    return render(re,'base.html')
def index(re):
    return render(re,'index.html')
def about(request):
    skills = ["Python", "Django", "REST API", "HTML", "CSS", "Tailwind", "Adobe Photoshop", "React", "MySQL", "Bootstrap"]
    
    internships = [
        {"title": "Junior Developer Trainee", "company": "Neurocode International Pvt. Ltd.", "date": "December 2024 – Present", "desc": "Working primarily as a Python developer, building REST APIs using Django, while also learning React."},
        {"title": "Full-Stack Development Intern", "company": "Luminar Technolab", "date": "June 2024 – December 2024", "desc": "Developed multiple projects using Python Django"},
        {"title": "AI-ML Virtual Intern", "company": "AICTE Eduskills", "date": "December 2022 – February 2023", "desc": "Gained knowledge in AI/ML concepts."}
    ]

    return render(request, "about.html", {"skills": skills, "internships": internships})

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Send email
        send_mail(
            subject=f"New Contact Message from {name}",
            message=f"Email: {email}\n\nMessage:\n{message}",
            from_email=email,  
            recipient_list=['gopikatp712@gmail.com'],
            fail_silently=False,
        )
        messages.success(request, "Your message has been sent successfully!")
        return redirect('contact')  # Redirect to the contact page

    return render(request, 'contact.html')


def projects(re):
    return render(re,'projects.html')