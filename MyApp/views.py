from django.shortcuts import render

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


def contact(re):
    return render(re,'contact.html')

def projects(re):
    return render(re,'projects.html')