import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent implements OnInit {

  collection = [
    {
      name: 'Hà Hoàng Minh',
      position: 'Sales Manager',
      img: '../../assets/Image/Ellipse 3.png',
      link: 'resume-template-hhm'
    },
    {
      name: "Lưu Chính Phương",
      position: 'Marketing Executive',
      img: '../../assets/Image/Rectangle 50.png',
      link: 'resume-template-lcp'
    },
    {
      name: "Tống Nhất Ngạo",
      position: 'Process Engineer',
      img: '../../assets/Image/TNN.png',
      link: 'resume-template-tnn'
    },
    {
      name: "Lư Diễm Du",
      position: 'Line Manager',
      img: '../../assets/Image/LDD.png',
      link: 'resume-template-hhm'
    },
    {
      name: "Hồng Tú Mỹ",
      position: 'Ophthalmologist',
      img: '../../assets/Image/HTM.png',
      link: 'resume-template-htm'
    },
    {
      name: "Hoàng Liên Hoa",
      position: 'Speech-language Pathologist',
      img: '../../assets/Image/HLH.png',
      link: 'resume-template-hlh'
    },
    {
      name: "Chu Nhã My",
      position: 'Dental Hygienist',
      img: '../../assets/Image/CNM.png',
      link: 'resume-template-hhm'
    },
    {
      name: "Tôn Thượng Hương",
      position: 'Cyber Calamity Forecaster',
      img: '../../assets/Image/TTH.png',
      link: 'resume-template-hhm'
    },
    {
      name: 'Hồ Quỳnh Anh',
      position: 'Partnership Manager',
      img: '../../assets/Image/Ho_Quynh_Anh.jpg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Đào Nguyễn Duy Bảo',
      position: 'Content marketing Specialist',
      img: '../../assets/Image/daonguyenduybao.jpg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Võ Kim Khánh',
      position: 'Communication Manager',
      img: '../../assets/Image/vokimkhanh.jpg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Trịnh Thương Thanh',
      position: 'Human Resource Personnel',
      img: '../../assets/Image/trinhthuongthanh.jpg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Hoàng Gia Hân',
      position: 'Digital Marketing Specialist',
      img: '../../assets/Image/hoanghangia.jpg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Nguyễn Thành Danh',
      position: 'Full-stack Marketer',
      img: '../../assets/Image/nguyenthanhdanh.jpeg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Phan Bảo Uyên',
      position: 'Full-stack Designer',
      img: '../../assets/Image/phanbaouyen.jpg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Đinh Quế Ân',
      position: 'Executive Assistant',
      img: '../../assets/Image/dinhquean.jpg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Lê Phương Quyên',
      position: 'Sales Representative',
      img: '../../assets/Image/lephuongquyen.jpg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Phan Bảo Ngọc',
      position: 'Accountant',
      img: '../../assets/Image/phanbaongoc.jpg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Nguyễn Triều',
      position: 'Executive Assistant',
      img: '../../assets/Image/nguyentrieu.jpg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Nguyễn Nam Phương',
      position: 'Customer Service Representative',
      img: '../../assets/Image/nguyennamphuong.jpg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Ngọc Anh Thư',
      position: 'Finance Manager',
      img: '../../assets/Image/ngocanhthu.jpg',
      link: 'resume-template-hhm'
    },
    {
      name: 'Hồ Minh Nguyệt',
      position: 'Product Manager',
      img: '../../assets/Image/hominhnguyet.jpg',
      link: 'resume-template-hhm'
    },

  ];
  page: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
