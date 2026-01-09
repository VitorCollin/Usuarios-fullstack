package com.meuapp.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.meuapp.api.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}
